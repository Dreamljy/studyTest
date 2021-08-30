import { render, fireEvent, waitFor, testA11y } from '@alita/test'
import React from 'react'
import Page from './index'

test("function test", async () => {
  // 赋值一个jest的方法
  const onFinish = jest.fn();
  const { container, getByText, getByLabelText } = render(
    <Page onFinish={onFinish} />
  );
  await testA11y(container);
  // 判断内容为'consoleLog'的节点存在
  expect(getByText('consoleLog')).toBeDefined();
  // 判断内容为'consoleLog'的节点class属性含有'myBut'
  expect(getByText('consoleLog')).toHaveClass('myBut');
  // 获取dom树里面的input标签
  const input: any = getByLabelText('myInput')
  // 修改input标签里面的value值
  fireEvent.change(input, { target: { value: '函数测试' } })
  await waitFor(() => {
    expect(getByText('您输入的内容是：函数测试'))
  })
  // 点击内容为'consoleLog'的按钮
  fireEvent.click(getByText('consoleLog'))
  // 等待响应
  await waitFor(() => {
    // 判断onFinish方法执行了一次
    expect(onFinish).toBeCalled()
  })
})
