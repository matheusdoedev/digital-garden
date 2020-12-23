def find(word, letter, index):
    print("finding...")
    index = 0
    while index < len(word):
        if word[index] == letter:
            print('index ' + str(index) + ' found')
            return index
        index = index + 1
    return -1

find("Flamengo", "F", 0)