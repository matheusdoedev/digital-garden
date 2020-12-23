def print_charbychar(word):
    if not isinstance(word, str):
        print("word should be a string")
        return

    for char in word:
        print(char)
    
# print_charbychar(7)

def print_ducklings():
    prefixes = 'JKLMNOPQ'

    for char in prefixes:
        if char == "O" or char == "Q":
            print(char + 'uack')
        else:
            print(char + 'ack')

print_ducklings()
