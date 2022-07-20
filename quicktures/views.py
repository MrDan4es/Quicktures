from django.http import HttpResponseRedirect
from django.shortcuts import redirect, render
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth import authenticate, login, logout


def login_page(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect('/')

    registerForm = UserCreationForm()
    loginForm = AuthenticationForm()

    if request.method == "POST":
        if request.POST.get('submit') == 'Log In':
            loginForm = AuthenticationForm(data=request.POST)
            username = request.POST['username']
            password = request.POST['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return HttpResponseRedirect('/')
        elif request.POST.get('submit') == 'Sign Up':
            registerForm = UserCreationForm(request.POST)
            if registerForm.is_valid():
                user = registerForm.save()
                username = registerForm.cleaned_data['username']
                password = registerForm.cleaned_data['password1']
                user = authenticate(username=username, password=password)
                login(request, user)
                return HttpResponseRedirect('/')

    return render(request, 'login.html', {
        'register_form': registerForm,
        'login_form': loginForm
    })


def logout_page(request):
    logout(request)
    return redirect('/')
