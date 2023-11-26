from django.shortcuts import render
from django.views import View
import requests

print("hola")
# Create your views here.
class AdrTestView(View):
    template_name = 'adrtest/charts.html'

    def get(self, request):
        print("hoa")
        print(request.user.username)
        api_url = f"http://127.0.0.1:8000/api/adrtest/?user={request.user.username}"
        response = requests.get(api_url)
        test_data = response.json()

        context = {
            'adrtest' : test_data,
        }

        return render(request, self.template_name, context)