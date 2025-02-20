import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineMoreVert } from "react-icons/md";

const Header = () => {
  // 예시로 로그인 상태(true)로 설정, 실제 로직에 맞게 변경하세요.
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const handleLogout = () => {
    // 실제 로그아웃 로직 (예: 토큰 삭제, 상태 갱신 등)
    setIsLoggedIn(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 좌측: Home 링크 */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors duration-200"
            >
              Home
            </Link>
          </div>

          {/* 우측: 데스크탑 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Link 
                  to="/profile" 
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                >
                  프로필
                </Link>
                <Link 
                  to="/test" 
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                >
                  테스트
                </Link>
                <Link 
                  to="/results" 
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                >
                  결과보기
                </Link>
                <button 
                  onClick={handleLogout} 
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                >
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                >
                  로그인
                </Link>
                <Link 
                  to="/signup" 
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                >
                  회원가입
                </Link>
              </>
            )}
          </nav>

          {/* 모바일: 더보기 버튼 */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 "
            >
              <MdOutlineMoreVert size={30} />
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴: 토글 상태에 따라 표시 */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 py-3 space-y-1">
            {isLoggedIn ? (
              <>
                <Link
                  to="/profile"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-200"
                >
                  프로필
                </Link>
                <Link
                  to="/test"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-200"
                >
                  테스트
                </Link>
                <Link
                  to="/results"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-200"
                >
                  결과보기
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-200"
                >
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-200"
                >
                  로그인
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-200"
                >
                  회원가입
                </Link>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
