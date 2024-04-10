from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import *


# Create your views here.

def get_companies(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)


def get_companies_id(request,id):
    company = get_object_or_404(Company, id=id)
    return JsonResponse(company.to_json(), safe=False)


def get_companies_id_vacancies(request, id):
    company = get_object_or_404(Company, id=id)
    vacancies = company.vacancies.all()
    companies_json = {'vacancies': list(vacancies.values)}
    return JsonResponse(companies_json, safe=False)


def get_vacancies(request):
    vacancies = Vacancy.objects.all()
    companies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(companies_json, safe=False)


def get_vacancies_id(request, id):
    vacancy = get_object_or_404(Company, id=id)
    return JsonResponse(vacancy.to_json(), safe=False)


def get_top_ten(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    return JsonResponse([vacancy.to_json() for vacancy in vacancies], safe=False)