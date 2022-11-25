from django.urls import path
from . import views


urlpatterns = [ 
    path("base/", views.base, name="basepage"),
    path("", views.home, name="homepage"),
    path("fxrateinfo/", views.FXRateInfo, name="fxrateinfo"),
    path("cashexchangeinfo/", views.CashExchangeInfo, name='cashexchangeinfo'),
    path("fxquery/", views.FXQuery, name="fxquery"),
    path('presentation/', views.Presentation, name="presentation")
]