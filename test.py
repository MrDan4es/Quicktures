from random import randint


ATTEMPTS_AMOUNT = int(input('Кол-во чисел : '))

while True:
    bomb = randint(0, ATTEMPTS_AMOUNT - 1)
    attempts = [*range(ATTEMPTS_AMOUNT)]
    
    while True:
        print(attempts)
        input_number = int(input('Number :'))
        if input_number in attempts:
            if input_number == bomb:
                print('BOOOOOOM\n')
                break
            attempts.remove(input_number)