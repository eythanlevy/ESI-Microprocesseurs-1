mov AX, 0xB800       ; On donne la valeur B800
mov ES, AX           ; au registre de segment ES
mov AL , 'h'         ; on donne une valeur
mov AH,10010111b     ; arbitraire a AX
mov [ES:0xA0] , AX   ; que l'on place aux positions
                     ; B80A0 et B80A1 en memoire.

