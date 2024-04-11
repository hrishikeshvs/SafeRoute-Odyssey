from django.shortcuts import render

def index(request):
    return render(request, 'SafeRoute_Odyssey/index.html')
