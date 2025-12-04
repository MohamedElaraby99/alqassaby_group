import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate, useParams } from 'react-router-dom';
import { usersAPI } from '../services/api';
import { useTranslation } from 'react-i18next';

const userSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters').optional().or(z.literal('')),
    role: z.enum(['user', 'admin']),
});

export default function UserForm() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditMode = !!id;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(userSchema),
        defaultValues: {
            role: 'user',
        },
    });

    useEffect(() => {
        if (isEditMode) {
            fetchUser();
        }
    }, [id]);

    const fetchUser = async () => {
        try {
            setLoading(true);
            const response = await usersAPI.getById(id);
            const user = response.data;
            setValue('name', user.name);
            setValue('email', user.email);
            setValue('role', user.role);
        } catch (err) {
            setError(t('error'));
            console.error('Error fetching user:', err);
        } finally {
            setLoading(false);
        }
    };

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            setError(null);

            if (isEditMode) {
                if (!data.password) delete data.password;
                await usersAPI.update(id, data);
            } else {
                await usersAPI.create(data);
            }

            navigate('/users');
        } catch (err) {
            setError(err.response?.data?.message || t('error'));
        } finally {
            setLoading(false);
        }
    };

    if (loading && isEditMode && !error) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
                {isEditMode ? t('editUser') : t('createUser')}
            </h1>

            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow p-6 space-y-6">

                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('name')}
                    </label>
                    <input
                        type="text"
                        {...register('name')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('email')}
                    </label>
                    <input
                        type="email"
                        {...register('email')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('password')} {isEditMode && <span className="text-gray-400 text-xs">(Leave empty to keep current)</span>}
                    </label>
                    <input
                        type="password"
                        {...register('password')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.password && (
                        <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                    )}
                </div>

                {/* Role */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('role')}
                    </label>
                    <select
                        {...register('role')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="user">{t('user')}</option>
                        <option value="admin">{t('admin')}</option>
                    </select>
                    {errors.role && (
                        <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>
                    )}
                </div>

                <div className="flex justify-end space-x-4 rtl:space-x-reverse pt-4">
                    <button
                        type="button"
                        onClick={() => navigate('/users')}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                        {t('cancel')}
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                    >
                        {loading ? t('loading') : t('save')}
                    </button>
                </div>
            </form>
        </div>
    );
}
