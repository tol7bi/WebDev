<<<<<<< HEAD
from django.urls import path
from .views import *

urlpatterns = [
    path('companies/', get_companies),
    path('companies/<int:id>/', get_companies_id),
    path('companies/<int:id>/vacancies/', get_companies_id_vacancies),
    path('vacancies/', get_vacancies),
    path('vacancies/<int:id>/', get_vacancies_id),
    path('vacancies/top_ten/', get_top_ten),
=======
from django.contrib import admin
from django.urls import path
from .views import *


urlpatterns = [
    path("companies/", company_list),
    path("companies/<int:id>/", company_details),
    path("companies/<int:id>/vacancies/", company_vacancies),
    path("vacancies/", VacancyListAPIView.as_view()),
    path("vacancies/<int:id>/", VacancyDetailAPIView.as_view()),
    path("vacancies/top_ten/", VacancyTopTenAPIView.as_view()),
>>>>>>> 91c0587 (lab 10)
]