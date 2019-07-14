import config from '../config'
import store from '../reducer/index'
import { logOut } from '../reducer/actions'

const diffStatusAction = {
	500: () => {
		return '服务器出现意料之外的错误'
	},
	403: () => {
		return '权限不足'
	},
	401: (history) => {
		const storage = window.localStorage;
		storage.token = null;
		store.dispatch(logOut())
		history.push('/login')
		return '请登录'
	},
	400: () => {
		return '请求数据不合法'
	},
	404: () => {
		return '功能已被迁移或永久移除'
	}
}

export function responseStatusHandle(res, history, statusHandler = {}) {
	if (res.status < 200 || res.status >= 300) {
		const handler = statusHandler[res.status]
		res.handleMessage = handler ? statusHandler[res.status]() : diffStatusAction[res.status](history)
		const error = new Error()
		error.res = res
		throw error
	}
	return res.json()
}

export function handleError(err) {
	let { res } = err
	alert((res && res.handleMessage) || ((res && res.status && '出现未能处理的错误，请告知我们，我们将尽快修复') || '服务器失联，请稍后再试，如果此问题一直未能得到修复，请联系我们。'))
	return { success: false }
}

export async function sendGet(url, query = {}, history, statusHandler) {
	let body = await fetch(`${config.host}${url}?${Object.keys(query).map(key => query[key] === undefined ? '' : `${key}=${query[key]}`).join('&')}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${store.getState().token}`,
		}
	}).then(res => responseStatusHandle(res, history, statusHandler)).catch(handleError)
	return body
}

export async function sendPost(url, body = {}, history, statusHandler) {
	return fetch(`${config.host}${url}`, {
		body: JSON.stringify(body),
		method: 'POST',
		headers: {
			Authorization: `Bearer ${store.getState().token}`,
			'Content-Type': 'application/json',
		}
	}).then(res => responseStatusHandle(res, history, statusHandler)).catch(handleError)
}

export async function sendPut(url, body = {}, history, statusHandler) {
	return fetch(`${config.host}${url}`, {
		body: JSON.stringify(body),
		method: 'PUT',
		headers: {
			Authorization: `Bearer ${store.getState().token}`,
			'Content-Type': 'application/json',
		}
	}).then(res => responseStatusHandle(res, history, statusHandler)).catch(handleError)
}

export async function sendDelete(url, history, statusHandler) {
	return fetch(`${config.host}${url}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${store.getState().token}`,
			'Content-Type': 'application/json',
		}
	}).then(res => responseStatusHandle(res, history, statusHandler)).catch(handleError)
}

export async function loginExample(body, history) {
	return sendPost('/login-example', body, history)
}

export async function test(body,history) {
	return sendGet('https://api.gushi.ci/all.json',body,history)
}
