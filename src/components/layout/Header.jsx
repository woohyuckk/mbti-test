import { useState } from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import useAuthStore from "../../store/authStore";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

const Header = () => {
  // 예시로 로그인 상태(true)로 설정, 실제 로직에 맞게 변경하세요.
  const { logout } = useAuthStore((state) => state);
  const isAuth = useAuthStore().isValidToken();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    // 실제 로그아웃 로직 (예: 토큰 삭제, 상태 갱신 등)
    logout();
    localStorage.removeItem("user");
  };
  return (
    <header className="borde-b-<3> w-full border-gray-200 bg-primary text-text_primary shadow-sm">
      {/* 데스크탑  */}
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* 좌측: Home 링크 */}
        <div className="flex-shrink-0">
          <NavLink
            to="/"
            className="hover:text-hover_color text-xl font-bold text-white transition-colors duration-200 hover:scale-150"
          >
            홈
          </NavLink>
        </div>

        {/* 우측: 데스크탑 네비게이션 */}
        <nav className="hidden items-center space-x-4 md:flex">
          {isAuth ? (
            <>
              <NavLink to="/profile">프로필</NavLink>
              <NavLink to="/test">테스트</NavLink>
              <NavLink to="/results">결과보기</NavLink>
              <button
                onClick={handleLogout}
                className="hover:text-hover_color font-bold text-white transition-colors duration-200 hover:scale-125"
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login">로그인</NavLink>
              <NavLink to="/signup">회원가입</NavLink>
            </>
          )}
        </nav>

        {/* 모바일: 더보기 버튼 */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="hover:text-hover_color text-white transition-colors duration-200"
          >
            <MdOutlineMoreVert size={30} />
          </button>
        </div>
      </div>

      {/* 모바일 메뉴: 토글 상태에 따라 표시 */}
      {isMobileMenuOpen && (
        <nav
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          className="border-t border-gray-200 bg-white md:hidden"
        >
          <div className="space-y-1 px-2 py-3">
            {isAuth ? (
              <>
                <Link
                  to="/profile"
                  className="hover:text-hover_color block rounded-md px-3 py-2 text-base font-bold text-gray-700 transition-colors duration-200 hover:bg-gray-50"
                >
                  프로필
                </Link>
                <Link
                  to="/test"
                  className="hover:text-hover_color block rounded-md px-3 py-2 text-base font-bold text-gray-700 transition-colors duration-200 hover:bg-gray-50"
                >
                  테스트
                </Link>
                <Link
                  to="/results"
                  className="hover:text-hover_color block rounded-md px-3 py-2 text-base font-bold text-gray-700 transition-colors duration-200 hover:bg-gray-50"
                >
                  결과보기
                </Link>
                <button
                  onClick={handleLogout}
                  className="hover:text-hover_color block w-full rounded-md px-3 py-2 text-left text-base font-bold text-gray-700 transition-colors duration-200 hover:bg-gray-50"
                >
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-indigo-600"
                >
                  로그인
                </Link>
                <Link
                  to="/signup"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-indigo-600"
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
