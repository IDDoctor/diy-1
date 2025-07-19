const MemoriesPage = () => {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold text-center mb-8">Our Memories</h1>
      <p className="text-gray-700 leading-relaxed">
        A gallery of photos from our journey:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div>
          <img src="https://images.unsplash.com/photo-1504196625659-37bc28c492a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZGVybHklMjBjYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Memory 1" className="rounded-md" />
          <p className="text-sm text-gray-500 mt-2">Celebrating a successful event.</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1585435489744-430d9695409c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGVsZGVybHklMjBjYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Memory 2" className="rounded-md" />
          <p className="text-sm text-gray-500 mt-2">Team meeting and planning session.</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGVsZGVybHklMjBjYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Memory 3" className="rounded-md" />
          <p className="text-sm text-gray-500 mt-2">Providing care and support to our clients.</p>
        </div>
      </div>
    </div>
  );
};

export default MemoriesPage;
