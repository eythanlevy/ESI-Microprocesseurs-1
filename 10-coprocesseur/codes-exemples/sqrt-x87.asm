; from http://en.wikibooks.org/wiki/X86_Assembly/Floating_Point

global _start
 
section .data
    val: dq 123.45  ;declare quad word (double precision)
 
section .bss
    res: resq 1     ;reserve 1 quad word for result
 
section .text
    _start:
 
    fld qword [val] ;load value into st0
    fsqrt           ;compute square root of st0 and store in st0
    fst qword [res] ;store st0 in result
 
    ;end program