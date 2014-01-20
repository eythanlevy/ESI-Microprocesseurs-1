; cli.asm

global principal
section .text

principal:
  cli

; fin
mov eax, 1
mov ebx, 0
int 0x80
