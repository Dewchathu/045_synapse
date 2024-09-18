import ChatbotButton from '@/components/ChatbotButton';
import Comparator from '@/components/Comparator';
import Navbar from '@/components/Navbar';


export default function HomePage() {
  return (
    <div>
      {/* Call the Navbar component */}
      <Navbar />

      {/* Rest of your page content */}
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center">
          Welcome to SYNOPSE
        </h1>
        <p className="text-center mt-4">
        This is a website that will help you make the most accurate decisions for your presidential election. 
        </p>
      </main>
      
      <ChatbotButton/>
      <Comparator/>
    </div>
  );
}
