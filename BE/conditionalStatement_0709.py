
# 중첩if 예제

appleQuality = input("사과의 상태를 입력하세요 :")
applePrice = int(input("사과 1개의 가격을 입력하세요 : "))

if appleQuality == "신선" :
    if applePrice < 1000:
        print("10개를 삽니다.")
    
    else:
        print("5개를 삽니다.")

else: 
    print("사지 않습니다.")