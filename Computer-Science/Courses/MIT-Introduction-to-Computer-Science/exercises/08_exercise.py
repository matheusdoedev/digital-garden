def is_trangle(a, b, c):
    if (a > b + c or b > a + c or c > a + b):
        print("No")
    else:
        print("Yes")

def is_trianglethat():
    stick_a = int(input("Strick a length: "))
    stick_b = int(input("Strick b length: "))
    stick_c = int(input("Strick c length: "))

    is_trangle(stick_a, stick_b, stick_c)

is_trianglethat()