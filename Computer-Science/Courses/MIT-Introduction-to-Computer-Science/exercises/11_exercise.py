import math

def test_square_root(x):
    for a in range(9):
        s1 = (x + float(a)/x) / 2
        s2 = math.sqrt(a)
        s3 = abs(s1-x)
        print(a, s1, s2, s3)

test_square_root(3)