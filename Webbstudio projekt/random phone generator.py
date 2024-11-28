import random

def r():
    return random.randint(0, 9)

for i in range(10):
    print(f"07{r()}-{r()}{r()}{r()} {r()}{r()} {r()}{r()}")