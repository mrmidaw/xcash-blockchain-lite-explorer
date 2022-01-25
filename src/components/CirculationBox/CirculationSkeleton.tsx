import React, { FC } from 'react'
import ContentLoader from 'react-content-loader'

export const CirculationSkeleton: FC = () => (
    <ContentLoader
        speed={1}
        width='100%'
        height='100%'
        viewBox="0 0 340 84"
        backgroundColor="#1189a5"
        foregroundColor="#e8e8e3"
    >
        <rect x="9" y="4" rx="0" ry="0" width="320" height="22" />
        <rect x="18" y="14" rx="0" ry="0" width="303" height="6" />
    </ContentLoader>
);