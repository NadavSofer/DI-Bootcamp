from django.shortcuts import render
from .models import Post
from rest_framework.views import APIView
from .serializers import PostSerializers
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from rest_framework.status import (HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_202_ACCEPTED)

# Create your views here.
class StudentView(APIView):

    permission_classes = (AllowAny,)
    
    def get(self, request, *args, **kwargs):

        pk = kwargs.get('pk')

        if pk:
            try:
                instance = Post.objects.get(id=pk)
                Serializer = PostSerializers(instance)
            except Post.DoesNotExist:
                return Response({'details': 'post not found'}, status=HTTP_400_BAD_REQUEST)
        else:
            queryset = Post.objects.all()
            Serializer = PostSerializers(queryset, many=True)
        return Response(Serializer.data, status=HTTP_200_OK)


    def post(self, request, *args, **kwargs):
        Serializer = Post.Serializer(data=request.data)
        
        if Serializer.is_valid():
            Serializer.save()
            return Response(Serializer.data, status=HTTP_201_CREATED)
        
        return Response(Serializer.errors, status=HTTP_400_BAD_REQUEST)


    def delete(self, request, pk, *args, **kwargs):
        try:
            article = Post.objects.get(id=pk)
            article.delete()
            return Response({'details': 'post was deleted'}, status=HTTP_202_ACCEPTED)
        except Post.DoesNotExist:
            return Response({'details': 'post not found'}, status=HTTP_400_BAD_REQUEST)
        
    def put(self, request, *args, **kwargs):
        pk = kwargs.get('pk')

        if pk:
            try:
                post = Post.objects.get(id=pk)
                Serializer = PostSerializers(post, data=request.data)
                if Serializer.is_valid():
                    Serializer.save()
                    return Response(Serializer.data)
            except Post.DoesNotExist:
                return Response({'details': 'post not found'}, status=HTTP_400_BAD_REQUEST)
        else:
            return Response({'details': 'post not found'}, status=HTTP_400_BAD_REQUEST)