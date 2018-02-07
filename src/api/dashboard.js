import request from '@/utils/request'

export function getDashboard() {
  return request({
    url: '/dashboard/data',
    method: 'post'
  })
}
