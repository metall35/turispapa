import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

export default function PhotoSphere({img, height}) {
    return(
        <ReactPhotoSphereViewer src={img} height={height} width={'100%'}></ReactPhotoSphereViewer>
    )
}