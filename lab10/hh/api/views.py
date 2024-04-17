<<<<<<< HEAD
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
=======
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer


@api_view(["GET"])
def company_list(request):
    if request.method == "GET":
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)


@api_view(["GET"])
def company_details(request, id=None):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    if request.method == "GET":
        serializer = CompanySerializer(company)
        return Response(serializer.data)


@api_view(["GET"])
def company_vacancies(request, id=None):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    if request.method == "GET":
        vacancies = Vacancy.objects.filter(company=company)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)



class VacancyListAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)


class VacancyDetailAPIView(APIView):
    def get_object(self, pk=None):
        try:
            vacancy = Vacancy.objects.get(id=pk)
            return vacancy
        except Vacancy.DoesNotExist as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id=None):
        vacancy = self.get_object(id)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)


class VacancyTopTenAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.order_by("-salary")
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
>>>>>>> 91c0587 (lab 10)
