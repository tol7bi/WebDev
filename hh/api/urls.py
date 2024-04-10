from django.urls import path
from .views import *

urlpatterns = [
    path('companies/', get_companies),
    path('companies/<int:id>/', get_companies_id),
    path('companies/<int:id>/vacancies/', get_companies_id_vacancies),
    path('vacancies/', get_vacancies),
    path('vacancies/<int:id>/', get_vacancies_id),
    path('vacancies/top_ten/', get_top_ten),
]