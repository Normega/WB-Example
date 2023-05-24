import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
    persist(
        set => ({
            user: null,
            isAuth: false,
            setUser: user => set({ user }),
            setIsAuth: isAuth => set({ isAuth }),
        }),
        { name: 'auth-storage', getStorage: () => localStorage },
    ),
);

export { useAuthStore };
