from django.shortcuts import render
from django.views import View
from posts.models import Post
import requests


class HeaderView(View):
    def get(self, request):
        return render(request, "core/header.html")


class HomeView(View):
    def get(self, request):
        return render(request, "core/index.html")
    
class Personalized(View):
    def get(self, request, username):
        print(f'mi usuario {username}')
        api_url = f"http://127.0.0.1:8000/api/adrtest/?user={username}"
        response = requests.get(api_url)
        test_data = response.json()

        context = {
            #'user' : user,
        }

        return render(request, "core/index.html")

