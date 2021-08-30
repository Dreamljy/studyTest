import { render } from '@alita/test'
import React from 'react'
import Page from './index'

it('page text', async () => {
  // 采用render方法挂载节点（划重点）
  const { getByText } = render(<Page></Page>)
  expect(getByText("欢迎学习测试")).toBeDefined()
})
