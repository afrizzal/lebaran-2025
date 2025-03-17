'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Deklarasi tipe SweetAlert2
declare global {
  interface Window {
    Swal: Record<string, any>;
    anime: any;
  }
}

// Tipe untuk result SweetAlert
interface SweetAlertResult {
  isConfirmed: boolean;
  isDenied: boolean;
  isDismissed: boolean;
  value: any;
}

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showLanterns, setShowLanterns] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [isSweetAlertLoaded, setIsSweetAlertLoaded] = useState(false);
  const [isAnimeLoaded, setIsAnimeLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [familyName, setFamilyName] = useState<string>('Al-Batul');
  const phoneNumber = '6285330265202'; // Ganti dengan nomor WhatsApp tujuan
  const chatMessage = "Selamat Hari Raya Idul Fitri, mohon maaf lahir dan batin. Semoga kita selalu diberikan kesehatan, kebahagiaan, dan keberkahan dalam hidup. Taqabbalallahu minna wa minkum.";

  // Mengambil nama keluarga dari URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const nameParam = urlParams.get('nama_keluarga');
      if (nameParam) {
        setFamilyName(decodeURIComponent(nameParam.replace(/\+/g, ' ')));
      }
    }
  }, []);

  // Debugging untuk Vercel
  useEffect(() => {
    console.log('App mounted, current step:', currentStep);
    
    // Periksa apakah SweetAlert2 tersedia
    if (typeof window !== 'undefined') {
      if (window.Swal) {
        console.log('SweetAlert is available on mount');
        setIsSweetAlertLoaded(true);
      } else {
        console.log('SweetAlert not available on mount, waiting...');
        // Periksa setiap 500ms apakah SweetAlert sudah dimuat
        const checkSwalInterval = setInterval(() => {
          if (window.Swal) {
            console.log('SweetAlert became available');
            setIsSweetAlertLoaded(true);
            clearInterval(checkSwalInterval);
          }
        }, 500);
        
        // Bersihkan interval jika komponen unmount
        return () => clearInterval(checkSwalInterval);
      }
      
      // Periksa apakah anime.js tersedia
      if (window.anime) {
        console.log('Anime.js is available on mount');
        setIsAnimeLoaded(true);
      } else {
        console.log('Anime.js not available on mount, waiting...');
        // Periksa setiap 500ms apakah anime.js sudah dimuat
        const checkAnimeInterval = setInterval(() => {
          if (window.anime) {
            console.log('Anime.js became available');
            setIsAnimeLoaded(true);
            clearInterval(checkAnimeInterval);
          }
        }, 500);
        
        // Bersihkan interval jika komponen unmount
        return () => clearInterval(checkAnimeInterval);
      }
    }
    
    // Fallback jika halaman tetap kosong setelah 5 detik
    const timer = setTimeout(() => {
      if (currentStep === 0) {
        console.log('Forcing step 1 after timeout');
        setCurrentStep(1);
      }
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [currentStep]);

  // Inisialisasi animasi teks ketika anime.js sudah dimuat
  useEffect(() => {
    if (isAnimeLoaded && currentStep > 0) {
      initTextAnimations();
    }
  }, [isAnimeLoaded, currentStep]);

  // Fungsi untuk menginisialisasi animasi teks
  const initTextAnimations = () => {
    if (typeof window !== 'undefined' && window.anime) {
      // Animasi untuk ML1 (Textillate)
      if (document.querySelector('.ml1') && currentStep === 1) {
        const textWrapper = document.querySelector('.ml1 .letters');
        if (textWrapper) {
          textWrapper.innerHTML = textWrapper.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");
        }

        window.anime.timeline({loop: false})
          .add({
            targets: '.ml1 .letter',
            scale: [0.3,1],
            opacity: [0,1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 600,
            delay: (el: any, i: number) => 70 * (i+1)
          }).add({
            targets: '.ml1 .line',
            scaleX: [0,1],
            opacity: [0.5,1],
            easing: "easeOutExpo",
            duration: 700,
            offset: '-=875',
            delay: (el: any, i: number, l: number) => 80 * (l - i)
          });
      }

      // Animasi untuk ML3 (Letters Fade In)
      if (document.querySelector('.ml3') && currentStep === 2) {
        const textWrapper = document.querySelector('.ml3');
        if (textWrapper) {
          textWrapper.innerHTML = textWrapper.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");
        }
        
        window.anime.timeline({loop: false})
          .add({
            targets: '.ml3 .letter',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el: any, i: number) => 150 * (i+1)
          });
      }

      // Animasi untuk ML6 (Letters Rotation)
      if (document.querySelector('.ml6') && currentStep === 4) {
        const textWrapper = document.querySelector('.ml6 .letters');
        if (textWrapper) {
          textWrapper.innerHTML = textWrapper.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");
        }
        
        window.anime.timeline({loop: false})
          .add({
            targets: '.ml6 .letter',
            translateY: ["1.1em", 0],
            translateZ: 0,
            duration: 750,
            delay: (el: any, i: number) => 50 * i
          });
      }

      // Animasi untuk ML9 (Letters Scale)
      if (document.querySelector('.ml9') && currentStep === 5) {
        const textWrapper = document.querySelector('.ml9 .letters');
        if (textWrapper) {
          textWrapper.innerHTML = textWrapper.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");
        }
        
        window.anime.timeline({loop: false})
          .add({
            targets: '.ml9 .letter',
            scale: [0, 1],
            duration: 1500,
            elasticity: 600,
            delay: (el: any, i: number) => 45 * (i+1)
          });
      }

      // Animasi untuk ML12 (Letter Spacing)
      if (document.querySelector('.ml12') && currentStep === 6) {
        const textWrapper = document.querySelector('.ml12');
        if (textWrapper) {
          textWrapper.innerHTML = textWrapper.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");
        }
        
        window.anime.timeline({loop: false})
          .add({
            targets: '.ml12 .letter',
            translateX: [40,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el: any, i: number) => 500 + 30 * i
          });
      }

      // Animasi untuk ML16 (Letters Fade Down)
      if (document.querySelector('.ml16') && currentStep === 7) {
        const textWrapper = document.querySelector('.ml16');
        if (textWrapper) {
          textWrapper.innerHTML = textWrapper.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");
        }
        
        window.anime.timeline({loop: false})
          .add({
            targets: '.ml16 .letter',
            translateY: [-100,0],
            easing: "easeOutExpo",
            duration: 1400,
            delay: (el: any, i: number) => 30 * i
          });
      }
    }
  };

  // Efek mengetik untuk chat - Perbaikan untuk memastikan tidak ada huruf yang hilang
  useEffect(() => {
    if (currentStep === 3) {
      let i = 0;
      setTypedText('');
      setIsTypingComplete(false);
      
      const typingInterval = setInterval(() => {
        if (i < chatMessage.length) {
          setTypedText((prev) => {
            // Pastikan karakter sebelumnya masih ada dengan menggabungkan string
            return prev + chatMessage.charAt(i);
          });
          i++;
        } else {
          clearInterval(typingInterval);
          setIsTypingComplete(true);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [currentStep, chatMessage]);

  // Efek untuk menampilkan lentera pada step 8
  useEffect(() => {
    if (currentStep === 8) {
      setShowLanterns(true);
      
      // Pindah ke step berikutnya setelah 5 detik
      const timer = setTimeout(() => {
        setCurrentStep(9);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  // Efek untuk menampilkan kembang api pada step 9
  useEffect(() => {
    if (currentStep === 9) {
      setShowFireworks(true);
    }
  }, [currentStep]);

  // Efek untuk transisi otomatis antar step
  useEffect(() => {
    if ([1, 2, 4, 5, 6, 7].includes(currentStep)) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 7000); // Durasi 7 detik untuk transisi
      
      return () => clearTimeout(timer);
    }
  }, [currentStep]);
  
  // Pastikan menampilkan popup musik di awal
  useEffect(() => {
    // Tampilkan popup hanya saat komponen pertama kali dimount dan SweetAlert sudah dimuat
    if (currentStep === 0 && isSweetAlertLoaded) {
      try {
        console.log('Attempting to show music popup');
        // Gunakan setTimeout untuk memastikan SweetAlert sudah dimuat
        const timer = setTimeout(() => {
          if (typeof window !== 'undefined' && window.Swal) {
            console.log('SweetAlert is available, showing popup');
            window.Swal.fire({
              title: "Ada musik di konten ini",
              text: "Mau dengar musiknya?",
              icon: 'question',
              showCancelButton: true,
              confirmButtonText: 'Ya',
              cancelButtonText: 'Tidak',
              confirmButtonColor: '#00A86B',
              cancelButtonColor: '#999',
            }).then((result: SweetAlertResult) => {
              console.log('SweetAlert result:', result);
              if (result.isConfirmed && audioRef.current) {
                audioRef.current.play()
                  .then(() => {
                    setIsPlaying(true);
                    console.log('Audio playing');
                  })
                  .catch(error => {
                    console.error('Error playing audio:', error);
                    setIsPlaying(false);
                    setError('Error playing audio: ' + error.message);
                  });
              }
              // Pindah ke step berikutnya setelah user memilih
              console.log('Moving to step 1');
              setCurrentStep(1);
            }).catch((err: Error) => {
              console.error('SweetAlert error:', err);
              setError('SweetAlert error: ' + err.message);
              // Fallback jika SweetAlert gagal
              setCurrentStep(1);
            });
          } else {
            console.error('SweetAlert not loaded');
            setError('SweetAlert not loaded');
            // Fallback jika SweetAlert tidak tersedia
            setCurrentStep(1);
          }
        }, 1500); // Delay 1.5 detik untuk memastikan script dimuat

        return () => clearTimeout(timer);
      } catch (err) {
        console.error('Error in music popup effect:', err);
        setError('Error in music popup: ' + (err as Error).message);
        setCurrentStep(1);
      }
    }
  }, [currentStep, isSweetAlertLoaded]); // Include isSweetAlertLoaded as dependency

  // Fungsi untuk toggle play/pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Fungsi untuk restart
  const restartApp = () => {
    setCurrentStep(1);
    setShowLanterns(false);
    setShowFireworks(false);
  };

  // Fungsi untuk menampilkan respons dan mengirim notifikasi WhatsApp
  const showResponse = () => {
    if (typeof window !== 'undefined' && window.Swal) {
      window.Swal.fire({
        title: 'Terima kasih!',
        text: 'Pesan kamu akan dikirim ke pengirim ucapan',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Kirim ke WhatsApp',
        confirmButtonColor: '#25D366', // Warna WhatsApp
      }).then((result: SweetAlertResult) => {
        if (result.isConfirmed) {
          // Animasi konfeti ketika user mengklik konfirmasi
          showConfettiAnimation();
          
          // Buka WhatsApp setelah delay sedikit
          setTimeout(() => {
            // Buat pesan WhatsApp
            const message = `Terima kasih atas ucapan Lebaran-nya, ${familyName}! Mohon maaf lahir dan batin juga ya 🙏✨`;
            // Buka WhatsApp dengan pesan
            window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
          }, 1500);
        }
      });
    }
  };

  // Fungsi untuk menampilkan animasi konfeti
  const showConfettiAnimation = () => {
    setShowFireworks(true);
    
    // Tambahkan konfeti ekstra saat like button diklik
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'celebration-confetti';
    document.body.appendChild(confettiContainer);
    
    // Buat banyak konfeti
    for (let i = 0; i < 150; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'celebration-particle';
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.width = `${5 + Math.random() * 5}px`;
      confetti.style.height = `${5 + Math.random() * 5}px`;
      confetti.style.backgroundColor = ['#00A86B', '#FFD700', '#8D5524', '#FFFFFF', '#F8F0E3', '#25D366', '#E0E0E0'][Math.floor(Math.random() * 7)];
      confetti.style.animationDelay = `${Math.random() * 3}s`;
      confetti.style.animationDuration = `${2 + Math.random() * 3}s`;
      confettiContainer.appendChild(confetti);
    }
    
    // Hapus konfeti setelah animasi selesai
    setTimeout(() => {
      document.body.removeChild(confettiContainer);
    }, 6000);
    
    if (typeof window !== 'undefined' && window.Swal) {
      window.Swal.fire({
        title: 'Alhamdulillah!',
        text: 'Pesan kamu akan dikirim ke WhatsApp',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        backdrop: `
          rgba(0,123,0,0.4)
          url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E.spinner_P7sC%7Banimation:spinner_svv2 .8s linear infinite;animation-delay:-.8s%7D.spinner_MJg4%7Banimation-delay:-.65s%7D.spinner_opMr%7Banimation-delay:-.5s%7D@keyframes spinner_svv2%7B93.75%,%100%25%7Btransform:translateX(16px)%7D%7D%3C/style%3E%3Ccircle class='spinner_P7sC' cx='4' cy='12' r='3' fill='%2300A86B'/%3E%3Ccircle class='spinner_P7sC spinner_MJg4' cx='4' cy='12' r='3' fill='%23FFD700'/%3E%3Ccircle class='spinner_P7sC spinner_opMr' cx='4' cy='12' r='3' fill='%238D5524'/%3E%3C/svg%3E")
          center 60%
          no-repeat
        `,
        showClass: {
          popup: 'animate__animated animate__fadeInUp animate__faster'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutDown animate__faster'
        }
      });
    }
  };

  return (
    <>
      {/* Debugging info - hanya muncul jika ada error */}
      {error && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          background: 'red',
          color: 'white',
          padding: '10px',
          zIndex: 9999,
          fontSize: '12px'
        }}>
          Error: {error}
        </div>
      )}

      <audio ref={audioRef} src="/music/lebaran.mp3" loop />
      
      {/* Fallback content jika tidak ada yang muncul */}
      {currentStep === 0 && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'var(--background-color)',
          zIndex: 5
        }}>
          <p>Loading Lebaran greeting...</p>
        </div>
      )}

      {isPlaying && (
        <button 
          onClick={togglePlay} 
          className="audio-control"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
          title={isPlaying ? 'Pause music' : 'Play music'}
          style={{ 
            position: 'fixed', 
            bottom: '20px', 
            right: '20px',
            zIndex: 1000,
            background: 'rgba(255, 255, 255, 0.7)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
          }}
        >
          {isPlaying ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="4" width="4" height="16" rx="1" fill="#00A86B" />
              <rect x="14" y="4" width="4" height="16" rx="1" fill="#00A86B" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3L19 12L5 21V3Z" fill="#00A86B" />
            </svg>
          )}
        </button>
      )}

      {/* Step 1: Salam Pembuka dengan Animasi ML1 */}
      {currentStep === 1 && (
        <div className="fullscreen-container step-1 animate-fade-in">
          <div className="centered-content">
            <h1 className="ml1">
              <span className="text-wrapper">
                <span className="line line1"></span>
                <span className="letters">Assalamu'alaikum</span>
                <span className="line line2"></span>
              </span>
            </h1>
            <h2 className="medium-text">Selamat datang di ucapan Lebaran 2025</h2>
            <div className="svg-container mosque-animation">
              <Image 
                src="/img/mosque.svg" 
                alt="Masjid" 
                width={200} 
                height={200} 
                className="svg-animation"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Judul dengan Animasi ML3 */}
      {currentStep === 2 && (
        <div className="fullscreen-container step-2 animate-fade-in">
          <div className="centered-content">
            <h1 className="ml3">Selamat Hari Raya Idul Fitri 1446 H</h1>
            <div className="svg-container lantern-animation">
              <Image 
                src="/img/lantern.svg" 
                alt="Lentera" 
                width={100} 
                height={100} 
                className="svg-animation lantern-left"
                priority
                unoptimized
              />
              <Image 
                src="/img/crescent-moon.svg" 
                alt="Bulan Sabit" 
                width={120} 
                height={120} 
                className="svg-animation moon-center"
                priority
                unoptimized
              />
              <Image 
                src="/img/lantern.svg" 
                alt="Lentera" 
                width={100} 
                height={100} 
                className="svg-animation lantern-right"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Chat */}
      {currentStep === 3 && (
        <div className="fullscreen-container step-3 animate-fade-in">
          <div className="chat-container">
            <div className="chat-bubble">
              <p>{typedText}<span className={isTypingComplete ? 'hidden' : 'cursor'}></span></p>
            </div>
            {isTypingComplete && (
              <button 
                className="continue-btn"
                onClick={() => setCurrentStep(4)}
              >
                Lanjutkan
              </button>
            )}
            <div className="svg-container alquran-animation">
              <Image 
                src="/img/alquran.svg" 
                alt="Al-Quran" 
                width={80} 
                height={80} 
                className="svg-animation"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Pesan dengan Animasi ML6 */}
      {currentStep === 4 && (
        <div className="fullscreen-container step-4 animate-fade-in">
          <div className="centered-content">
            <h1 className="ml6">
              <span className="text-wrapper">
                <span className="letters">Mohon Maaf Lahir dan Batin</span>
              </span>
            </h1>
            <div className="svg-container praying-animation">
              <Image 
                src="/img/praying.svg" 
                alt="Berdoa" 
                width={150} 
                height={150} 
                className="svg-animation"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 5: Pesan dengan Animasi ML9 */}
      {currentStep === 5 && (
        <div className="fullscreen-container step-5 animate-fade-in">
          <div className="centered-content">
            <h1 className="ml9">
              <span className="text-wrapper">
                <span className="letters">Semoga Taqwa Kita Diterima</span>
              </span>
            </h1>
            <div className="svg-container bedug-animation">
              <Image 
                src="/img/bedug.svg" 
                alt="Bedug" 
                width={120} 
                height={120} 
                className="svg-animation"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 6: Pesan dengan Animasi ML12 */}
      {currentStep === 6 && (
        <div className="fullscreen-container step-6 animate-fade-in">
          <div className="centered-content">
            <h1 className="ml12">Taqabbalallahu minna wa minkum</h1>
            <h2 className="special-text">Minal Aidin wal Faizin</h2>
          </div>
        </div>
      )}

      {/* Step 7: Pesan dengan Animasi ML16 */}
      {currentStep === 7 && (
        <div className="fullscreen-container step-7 animate-fade-in">
          <div className="centered-content">
            <h1 className="ml16">Mari Rayakan Kemenangan</h1>
          </div>
        </div>
      )}

      {/* Step 8: Lentera animasi */}
      {currentStep === 8 && (
        <div className="fullscreen-container step-8 animate-fade-in">
          <div className="centered-content">
            <h2 className="elegant-text fade-in">Sebentar lagi...</h2>
          </div>
          {showLanterns && (
            <div className="lanterns-container">
              {[...Array(15)].map((_, i) => (
                <div key={i} className={`lantern lantern-${i % 3 + 1}`} style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}></div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Step 9: Ucapan Lebaran */}
      {currentStep === 9 && (
        <div className="fullscreen-container step-9 animate-fade-in">
          <div className="greeting-card">
            <div className="profile-circle">
              <Image 
                src="/img/profile.jpg" 
                alt="Foto Profil" 
                className="profile-img" 
                width={300}
                height={300}
                priority
                unoptimized
              />
              <div className="ketupat"></div>
            </div>
            <div className="card-content">
              <h1 className="title">SELAMAT HARI RAYA IDUL FITRI</h1>
              <div className="message">
                <p>Taqabbalallahu minna wa minkum, shiyamana wa shiyamakum. Mohon maaf lahir dan batin atas segala khilaf dan salah. Semoga kita dipertemukan kembali di Ramadhan mendatang dalam keadaan yang lebih baik.</p>
                <p className="sender">Dari: {familyName}</p>
              </div>
            </div>
          </div>

          {showFireworks && (
            <div className="fireworks-container">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="firework" style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 50}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}>
                  <div className="explosion"></div>
                  {[...Array(20)].map((_, j) => (
                    <div 
                      key={j} 
                      className="particle"
                      style={{
                        transform: `rotate(${j * 18}deg) translateY(-15px)`,
                        backgroundColor: ['#00A86B', '#FFD700', '#8D5524', '#FFFFFF', '#F8F0E3', '#25D366'][Math.floor(Math.random() * 6)],
                        animationDuration: `${1 + Math.random()}s`
                      }}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          )}

          <div className="crescent-container">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="crescent" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
                fontSize: `${10 + Math.random() * 20}px`,
                opacity: 0.7 + Math.random() * 0.3
              }}>☪️</div>
            ))}
          </div>
        </div>
      )}

      {/* Step 10: Respons */}
      {currentStep === 9 && (
        <div className="response-buttons">
          <button onClick={showResponse} className="like-btn">Balas Ucapan</button>
          <button onClick={restartApp} className="restart-btn">Ulangi</button>
        </div>
      )}
    </>
  );
}
