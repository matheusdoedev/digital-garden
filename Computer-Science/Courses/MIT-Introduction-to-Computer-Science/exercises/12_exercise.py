import math

def eval_loopthat():
    x = ''

    while(x != 'done' or x != 'Done' or x != 'DONE'):
        x = input('eval x: ')

        if (x == 'done' or x == 'Done' or x == 'DONE'):
            return x
        else:
            print(eval(x))
        
eval_loopthat()