from rest_framework import permissions

class IsMe(permissions.BasePermission):

    def has_permission(self, request, view):
        if request.user.username != 'nadav':
            return False
        return True

    # def has_object_permission(self, request, view, obj):
    #     return super().has_object_permission(request, view, obj)


class report3(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if obj.location.lower() == 'place' and request.user.username == 'nadav':
            return False
        return True
    