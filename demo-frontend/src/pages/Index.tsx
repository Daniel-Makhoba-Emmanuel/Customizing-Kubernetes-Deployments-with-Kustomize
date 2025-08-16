const Index = () => {
  return (
    <div className="min-h-screen bg-space flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Animated starfield */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large glowing stars */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-white rounded-full animate-pulse shadow-lg shadow-white/50" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-32 left-20 w-1 h-1 bg-red-400 rounded-full animate-pulse shadow-lg shadow-red-400/50" style={{ animationDelay: '2s', animationDuration: '1.5s' }}></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-blue-300 rounded-full animate-pulse shadow-lg shadow-blue-300/50" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-white rounded-full animate-pulse shadow-lg shadow-white/50" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }}></div>
        <div className="absolute top-32 right-1/3 w-1 h-1 bg-red-300 rounded-full animate-pulse shadow-lg shadow-red-300/50" style={{ animationDelay: '2.5s', animationDuration: '1.8s' }}></div>
        
        {/* Additional distant stars */}
        <div className="absolute top-80 left-1/4 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '1.2s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-60 right-1/4 w-2 h-2 bg-blue-200 rounded-full animate-pulse shadow-lg shadow-blue-200/30" style={{ animationDelay: '0.8s', animationDuration: '3.2s' }}></div>
        <div className="absolute top-96 right-16 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '2.2s', animationDuration: '2.9s' }}></div>
        <div className="absolute bottom-40 left-1/2 w-2 h-2 bg-red-200 rounded-full animate-pulse shadow-lg shadow-red-200/40" style={{ animationDelay: '0.3s', animationDuration: '4.5s' }}></div>
        <div className="absolute top-52 left-16 w-1 h-1 bg-white/70 rounded-full animate-pulse" style={{ animationDelay: '1.8s', animationDuration: '3.1s' }}></div>
        <div className="absolute bottom-80 right-1/2 w-2 h-2 bg-blue-100 rounded-full animate-pulse shadow-lg shadow-blue-100/30" style={{ animationDelay: '2.8s', animationDuration: '3.7s' }}></div>
        
        {/* Distant galaxy stars */}
        <div className="absolute top-16 left-1/2 w-0.5 h-0.5 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '3s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-16 left-1/4 w-0.5 h-0.5 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '3.5s', animationDuration: '4.2s' }}></div>
        <div className="absolute top-72 right-1/4 w-0.5 h-0.5 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '4s', animationDuration: '3.8s' }}></div>
      </div>

      <div className="text-center space-y-12 relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold tracking-wider text-starwars animate-fade-in" data-text="KUSTOMIZED CLUSTER">
          KUSTOMIZED CLUSTER
        </h1>
        
        <div className="text-xl md:text-2xl text-blue-300 animate-fade-in glow-text" style={{ animationDelay: '0.3s' }}>
          this is the dev environment
        </div>
        
        <div className="text-sm text-white/60 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          A long time ago in a galaxy far, far away...
        </div>
      </div>
    </div>
  );
};

export default Index;
