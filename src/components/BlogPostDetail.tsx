import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';
import { useEffect } from 'react';
import { useSEO } from '../hooks/useSEO';

const BlogPostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const postIndex = BLOG_POSTS.findIndex(p => p.id === Number(id));
  const post = BLOG_POSTS[postIndex];

  const getPublishDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      if (!isNaN(d.getTime())) {
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
    } catch {
      // Fallback to raw string if parsing fails
    }
    return dateStr;
  };

  useSEO({
    title: post ? `${post.title} | Ana Yaghoubi Blog` : 'Post Not Found | Ana Yaghoubi Blog',
    description: post ? post.excerpt : 'The requested blog post could not be found.',
    imageUrl: post ? post.image : undefined,
    jsonLd: post ? {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'headline': post.title,
      'description': post.excerpt,
      'datePublished': getPublishDate(post.date),
      'image': post.image,
      'author': {
        '@type': 'Person',
        'name': 'Ana Yaghoubi',
        'jobTitle': 'Software Developer'
      }
    } : undefined
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-12 px-6 flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="text-3xl font-bold">Post not found</h1>
        <Link to="/blog" className="group flex items-center gap-3 text-muted hover:text-accent transition-all font-bold text-[11px] uppercase tracking-[0.2em] font-inter w-fit mx-auto py-2">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Posts
        </Link>
      </div>
    );
  }

  const prevPost = postIndex > 0 ? BLOG_POSTS[postIndex - 1] : null;
  const nextPost = postIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Link to="/blog" className="group flex items-center gap-3 text-muted hover:text-accent transition-all font-bold text-[11px] uppercase tracking-[0.2em] font-inter w-fit py-2">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            All Posts
          </Link>
          <div className="bg-accent/10 text-accent text-[10px] font-bold px-3 py-1 rounded-full border border-accent/20 backdrop-blur-sm uppercase tracking-widest font-inter">
            Week {post.week}
          </div>
        </div>

        {/* Hero Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {post.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1.5 text-[10px] font-bold text-accent tracking-wider bg-accent/5 px-3 py-1 rounded-full border border-accent/10 font-inter">
                  <Tag size={12} /> {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight font-inter tracking-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-xs text-muted font-bold uppercase tracking-widest font-inter pt-2">
              <span className="flex items-center gap-2">
                <Calendar size={14} className="text-accent/60" /> {post.date}
              </span>
            </div>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/5 reveal">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-purple max-w-none">
          <div className="text-text-secondary text-lg leading-relaxed font-inter space-y-6">
            {post.content.split('\n\n').map((para, i) => {
              const parseBold = (text: string) => {
                return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={index} className="text-white font-bold">{part.slice(2, -2)}</strong>;
                  }
                  return part;
                });
              };
              return <p key={i}>{parseBold(para)}</p>;
            })}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="pt-12 border-t border-border mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevPost ? (
              <button 
                onClick={() => navigate(`/blog/${prevPost.id}`)}
                className="card group flex flex-col items-start text-left gap-4 hover:border-accent/40 transition-all p-6 sm:p-8"
              >
                <span className="text-[10px] font-bold text-muted uppercase tracking-[0.2em] flex items-center gap-2">
                  <ChevronLeft size={14} /> Previous Post
                </span>
                <span className="text-lg font-bold group-hover:text-accent transition-colors line-clamp-2 font-inter tracking-tight">
                  {prevPost.title}
                </span>
              </button>
            ) : <div className="hidden md:block" />}

            {nextPost ? (
              <button 
                onClick={() => navigate(`/blog/${nextPost.id}`)}
                className="card group flex flex-col items-end text-right gap-4 hover:border-accent/40 transition-all p-6 sm:p-8"
              >
                <span className="text-[10px] font-bold text-muted uppercase tracking-[0.2em] flex items-center gap-2">
                  Next Post <ChevronRight size={14} />
                </span>
                <span className="text-lg font-bold group-hover:text-accent transition-colors line-clamp-2 font-inter tracking-tight">
                  {nextPost.title}
                </span>
              </button>
            ) : <div className="hidden md:block" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
