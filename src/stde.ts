import {stde} from './stdeParent'

import {Nand, nand} from './gates/nand';
import {Xnor, xnor} from './gates/xnor';
import {And, and} from './gates/and';
import {Nor, nor} from './gates/nor';
import {Xor, xor} from './gates/xor';
import {Not, not} from './gates/not';
import {Or, or} from './gates/or';

import {Demux, demux} from './comb/demux';
import {Cmps, cmps} from './comb/cmps';
import {Mult, mult} from './comb/mult';
import {Add, add} from './comb/add';
import {Enc, enc} from './comb/enc';
import {Dec, dec} from './comb/dec';
import {Mux, mux} from './comb/mux';
import {Div, div} from './comb/div';
import {Cmp, cmp} from './comb/cmp';
import {Ha, ha} from './comb/ha';
import {Fa, fa} from './comb/fa';

import {Preset_cnt, preset_cnt} from './ff/preset_cnt';
import {Async_cnt, async_cnt} from './ff/async_cnt';
import {Sync_cnt, sync_cnt} from './ff/sync_cnt';
import {Latch, latch} from './ff/latch';
import {Sr_ff, sr_ff} from './ff/sr_ff';
import {Jk_ff, jk_ff} from './ff/jk_ff';
import {T_ff, t_ff} from './ff/t_ff';
import {D_ff, d_ff} from './ff/d_ff';
import {Sreg, sreg} from './ff/sreg';
import {Cnt, cnt} from './ff/cnt';

import {Rom, rom} from './mem/rom';

import {Buf, buf} from './buffer/buf';
import {St3_buf, st3_buf} from './buffer/st3_buf';

import {Tmr, tmr} from './timing/tmr';
import {Delay, delay} from './timing/delay';

export {
    stde,
    // Gates
    Nand,
    nand,
    Xnor,
    xnor,
    And,
    and,
    Nor,
    nor,
    Xor,
    xor,
    Not,
    not,
    Or,
    or,
    // Comb
    Demux,
    demux,
    Cmps,
    cmps,
    Mult,
    mult,
    Add,
    add,
    Enc,
    enc,
    Dec,
    dec,
    Mux,
    mux,
    Div,
    div,
    Cmp,
    cmp,
    Ha,
    ha,
    Fa,
    fa,
    // ff
    Preset_cnt,
    preset_cnt,
    Async_cnt,
    async_cnt,
    Sync_cnt,
    sync_cnt,
    Latch,
    latch,
    Sr_ff,
    sr_ff,
    Jk_ff,
    jk_ff,
    T_ff,
    t_ff,
    D_ff,
    d_ff,
    Sreg,
    sreg,
    Cnt,
    cnt,
    // mem
    Rom,
    rom,
    // buffer
    Buf,
    buf,
    St3_buf,
    st3_buf,
    // timing
    Tmr,
    tmr,
    Delay,
    delay
};
// 1. Базовые логические элементы (Логические операторы)
// И (AND)
// ИЛИ (OR)
// НЕ (NOT)
// И-НЕ (NAND)
// ИЛИ-НЕ (NOR)
// Исключающее ИЛИ (XOR)
// Исключающее ИЛИ-НЕ (XNOR)
// 2. Комбинационные схемы
// Сумматор (ADD)
// Полусумматор (HA)
// Полный сумматор (FA)
// Шифратор (ENC)
// Дешифратор (DEC)
// Мультиплексор (MUX)
// Демультиплексор (DEMUX)
// Схема сравнения (CMPS)
// делитель (DIV)
// Умножитель (MULT)
// Компаратор (CMP)
// 3. Последовательные схемы (Триггеры и счетчики)
// Триггер D-типа (D-FF)
// Триггер SR-типа (SR-FF)
// Триггер JK-типа (JK-FF)
// Триггер T-типа (T-FF)
// LATCH (защелка)
// Регистр сдвига (SREG)
// Счетчик (CNT)
// Счетчик с предустановкой (PRESET-CNT)
// Синхронный счетчик (SYNC-CNT)
// Асинхронный счетчик (ASYNC-CNT)
// 4. Память и запоминающие устройства
// ПЗУ (постоянная память) (ROM)
// 5. Буферные элементы
// Буфер (BUF)
// Трехсостоячный буфер (3-STATE BUF)
// 6. Элементы задержки и таймеры
// Таймер (TMR)
// Схема задержки (DELAY)
