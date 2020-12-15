def do_twice(f, v):
    f(v)
    f(v)

def do_four(f, v):
    do_twice(f, v)
    do_twice(f, v)

def print_twice(word):
    print(word)
    print(word)

def right_justify(s):
    wordLength = len(s)
    print((" " * (53 - int(wordLength / 2))) + s)

def grid():
    right_justify("+----+----+")
    do_four(right_justify, "|")
    do_four(right_justify, "|")
    do_four(right_justify, "|")
    right_justify("+----+----+")
    do_four(right_justify, "|")
    do_four(right_justify, "|")
    do_four(right_justify, "|")
    right_justify("+----+----+")

grid()