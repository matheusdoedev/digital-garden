"""
Fermat's last Theorem says that there are no integers 'a', 'b', and 'c' such that an+bn=cn for any values of 'n' greater than 2.

Write a function named check_fermatthat takes four parameters - 'a', 'b', 'c', and 'n' -- and that checks to see if Fermat's theorem holds. If 'n' is greater than 2 and it turns out to be true that a.n+b.n=c.n the program should print, "Holy smokes, Fermat was wrong!" Otherwise the program should print "No, that doesn't work."
"""

def check_fermatthat():
    a = int(input("a: "))
    b = int(input("b: "))
    c = int(input("c: "))
    n = int(input("n: "))

    if n<=2:
        print("n should be greater than 2")
    else:
        if a*n+b*n==c*n:
            print("Holy smokes, Fermat was wrong!")
        else:
            print("No, that doesn't work.")

check_fermatthat()

