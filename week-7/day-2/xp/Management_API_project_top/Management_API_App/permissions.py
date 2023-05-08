from rest_framework import permissions

class IsDepartmentAdmin(permissions.BasePermission):

    def has_permission(self, request, view):
        print(request.user.employee_user)
        if request.user and request.user.employee_user.department_administrator:
            return True
        return False