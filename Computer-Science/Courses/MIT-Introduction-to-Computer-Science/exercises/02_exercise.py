# THe volume of a sphere with radius 'r' is '4/3' πr³
# What is the volume of a sphere with radius 5? Hint: 392.6 is wrong!
import math

π = 3.14
r = 5
print((4/3)*math.pi*r**3)

# Supporse the cover price of a book is $24.95, but bookstores get a 40% discount. Shipping costs $3 for the first copy and 75c for each additional copy. What is the total wholesale cost for 60 copies

book_cover_price = 24.95
discount = .4
shipping_cost_for_the_first_copy = 3
shipping_cost_for_additional_copies = .75

# total cost for 60 copies
print((book_cover_price * discount * ((60 - 1) * shipping_cost_for_additional_copies)) + (book_cover_price * discount + shipping_cost_for_the_first_copy))
