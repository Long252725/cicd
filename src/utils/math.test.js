import { calculateTotal } from './math';
import { describe, it, expect } from 'vitest';

describe('Kiểm thử chức năng thanh toán', () => {
    it('Kiểm tra tính tổng: 20k + 30k phải bằng 50k', () => {
        // Dev A code đoạn này chạy đúng 100%
        expect(calculateTotal(20000, 30000)).toBe(50000);
    });
});