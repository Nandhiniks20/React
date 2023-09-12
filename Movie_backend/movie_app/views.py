from django.shortcuts import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
# from .serializers import JSONDataSerializer

# Create your views here.
# def index(request):
#     return HttpResponse('Hello welcome to the movie site')
class ReactView(APIView):
    def get(self, request):
        output=[{"movie_name":output.movie_name, "des":output.des}
        for output in Mv_data.objects.all()]
        return Response(output)