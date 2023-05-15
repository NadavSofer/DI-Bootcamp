from django.shortcuts import render
from django.urls import reverse, reverse_lazy
from django.http import HttpResponseRedirect
from django.views import generic
from .models import BookReview, Book
from .forms import ReviewForm
from django.db.models import Avg
# Create your views here.
class BookDetailView(generic.DetailView):
    model = Book
    template_name = 'bookView.html'
    context_object_name = 'book'

    def get_context_data(self, **kwargs):
        context = {}
        id = self.kwargs.get('pk')
        reviews_list = BookReview.objects.filter(book_id=id)
        avg_rating = BookReview.objects.filter(book_id=id).aggregate(avg_rating=Avg('rating'))['avg_rating']
        form = ReviewForm()

        if self.request.method == 'POST':
            form = ReviewForm(self.request.POST)
            if form.is_valid():
                review = form.save(commit=False)
                review.book_id = id
                review.user = self.request.user
                review.save()
                return HttpResponseRedirect(reverse_lazy('book-detail', args=[id]))

        context.update({
            'book': Book.objects.all(),
            'avg_rating': avg_rating,
            'count_rating': reviews_list.count(),
            'id': id,
            'form': form,
            'review_list': reviews_list,
        })
        return context
    
    def post(self, request, *args, **kwargs):
        return self.get_context_data(**kwargs)