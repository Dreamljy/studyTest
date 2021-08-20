// 针对number类型
test("number test", async () => {
  // 期望值比匹配器大
  expect(2 + 3).toBeGreaterThan(4.5);
  expect(2 + 3).toBeGreaterThanOrEqual(5);
  // 期望值比匹配器小
  expect(2 + 3).toBeLessThan(6);
  expect(2 + 3.5).toBeLessThanOrEqual(5.5);
  expect(2 + 3).toBe(5);
  expect(2 + 3).toEqual(5);
  // 浮点数使用toBeCloseTo进行匹配，不用toEqual
  expect(0.1 + 0.2).toBeCloseTo(0.3);
})

// 字符串的匹配
test('string test', async () => {
  // toMatch可以使用正则表达式去匹配字符串
  expect('team').toMatch(/t/);
})

// 数组类型匹配
test('Array test', async () => {
  const shoppingList = [
    'apple',
    'banana',
    'orange',
    'watermelon',
    'hami',
  ];
  expect(shoppingList).toContain('orange');
  expect(new Set(shoppingList)).toContain('banana');
})



