; cli.asm

global main
section .text

main:
  cli

; fin
mov eax, 1
mov ebx, 0
int 0x80
