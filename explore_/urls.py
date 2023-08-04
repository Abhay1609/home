
from django.contrib import admin
from django.urls import path,include
from rest_framework.routers import DefaultRouter
from comp import views
from django.conf import settings
from django.conf.urls.static import static
router=DefaultRouter()


router.register(r'jobviewapi',views.JobViewSet,basename='employee')
router.register(r'queryviewapi',views.QueryViewSet,basename='query')
urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include(router.urls),name='index'),
    ]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
