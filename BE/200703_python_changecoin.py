
## 변수선언
money, c500, c100, c50, c10 = 0,0,0,0,0

# 메인 코드부분
money = int(input("교환할 돈은 얼마인가요?"))


c500 = money // 500 
# money 를 500으로 나눈 몫(500원을 몇개 반환할지)
money %= 500
# money를 500으로 나눈 나머지 반환(500원짜리 빼고 남는돈)

c100 = money // 100
money %= 100

c50 = money // 50
money %= 50

c10 = money // 10
money %= 10

print(c500, c100, c50, c10)

