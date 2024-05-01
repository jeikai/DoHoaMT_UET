import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

// Hàm để load model
async function loadModel(modelPath) {
    return new Promise((resolve, reject) => {
        // Khai báo loaders
        const objLoader = new OBJLoader();
        const textureLoader = new THREE.TextureLoader(); // Sử dụng TextureLoader từ THREE
        // Tải mô hình OBJ
        objLoader.load(
            modelPath[0],
            (object) => {
                // Tải texture PNG
                textureLoader.load(
                    modelPath[1],
                    (texture) => {
                        // Lặp qua tất cả các vật liệu trong mô hình và áp dụng texture
                        object.traverse((child) => {
                            if (child instanceof THREE.Mesh) {
                                // Tạo vật liệu mới với texture đã tải
                                const material = new THREE.MeshPhongMaterial({ map: texture });
                                // Áp dụng vật liệu mới cho mỗi mặt trong mô hình
                                child.material = material;
                                child.castShadow = true; // Áp dụng castShadow cho từng vật thể con
                                child.receiveShadow = true;

                            }
                        });

                        // Trả về scene của mô hình
                        resolve(object);
                    },
                    undefined,
                    (error) => {
                        reject(error);
                    }
                );
            },
            undefined,
            (error) => {
                reject(error);
            }
        );
    });
}




// Hàm để load tất cả các model và trả về một mảng chứa các đối tượng có dạng {type: "grass", model: model}
export async function loadAllModels(modelPaths) {
    try {
        const models = [];
        for (const modelPath of modelPaths) {
            const model = await loadModel(modelPath.path);

            const boundingBox = new THREE.Box3().setFromObject(model);
            const size = new THREE.Vector3();
            boundingBox.getSize(size);

            let scale = 0;
            if (modelPath.type[1] === "land" || modelPath.type[1] === "road" || modelPath.type[1] === "car") {
                scale = 1 / Math.min(size.x, size.z);
            } else if (modelPath.type[1] === "player") {
                scale = 0.7 / Math.min(size.x, size.z);
            }
            else {
                scale = 1 / Math.max(size.x, size.z);
            } 5

            model.scale.set(scale, scale, scale);
            models.push({ type: modelPath.type[0], model: model });
        }
        return models;
    } catch (error) {
        console.error('Lỗi khi load model:', error);
        return []; // Trả về một mảng rỗng nếu có lỗi xảy ra
    }
}
