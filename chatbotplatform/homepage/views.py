from django.shortcuts import render
from django.http import HttpResponse
import random
import requests
import FinanceDataReader as fdr
import pandas as pd

 





# Create your views here.

words = [ 
    "아... 이거 혼자 끝낼 수 있을까",
    "괜히 혼자 한다고 했나 ㅋㅋㅋ",
    "좌절 좌절 좌절",
    "뭐부터 시작해야 돼..."
]

df = fdr.DataReader('USD/KRW', '2022-08-14', '2022-11-21')



rate = fdr.DataReader('USD/KRW', '2022-11-21')

def base(request):
    sentence = random.choice(words)
    context = {"words": sentence}
    return render(request, "homepage/base.html", context)


def home(request):
    return render(request, "homepage/home.html")


def FXRateInfo(request):

    return render(request, "pages/fxrateinfo.html")

def CashExchangeInfo(request):
    return render(request, "pages/CashExchangeInfo.html")


def FXQuery(request):
    close = f"{rate.Close[0]:.2f}"
    timestamp = rate.axes[0][0]
    context = {"rate": close, "date": timestamp,}
    
    return render(request, "pages/FXQuery.html", context)

def Presentation(request):
    return render(request, "pages/presentation1.html")