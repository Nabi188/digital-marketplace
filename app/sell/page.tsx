"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { SelectCategory } from "../components/SelectCategory";
import { Textarea } from "@/components/ui/textarea";
import { TipTapEditor } from "../components/Editor";
import { UploadDropzone } from "../lib/uploadthing";

export default function SellRoute() {
  return (
    <section className="w-full items-center max-auto px-4 md:px-8 mb-14">
      <Card>
        <form>
          <CardHeader>
            <CardTitle className="text-violet-500">Đăng bán sản phẩm của bạn ngay bây giờ</CardTitle>
            <CardDescription>
              Mô tả sản phẩm chi tiết của bạn và chúng tôi sẽ giúp bạn bán nó
              nhanh chóng!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-2">
              <Label className="text-violet-500">Tên sản phẩm</Label>
              <Input
                className="border-2 border-primary/10"
                type="text"
                placeholder="Tên sản phẩm của bạn"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label className="text-violet-500">Danh mục sản phẩm</Label>
              <SelectCategory />
            </div>

            <div className="flex flex-col gap-y-2">
              <Label className="text-violet-500">Giá sản phẩm (VNĐ)</Label>
              <Input
                className="border-2 border-primary/10"
                placeholder="999,000đ"
                type="number"
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <Label className="text-violet-500">Mô tả ngắn</Label>
              <Textarea
                className="border-2 border-primary/10"
                placeholder="Viết 1 đoạn mô tả ngắn về sản phẩm của bạn ở đây"
              />
            </div>

            <div>
              <Label className="text-violet-500 pb-3">Mô tả sản phẩm</Label>
              <TipTapEditor/>
            </div>
            <div className="flex flex-col gap-y-2">
              <Label className="text-violet-500">Hình ảnh sản phẩm</Label>
              <UploadDropzone endpoint="imageUploader" />
            </div>

            <div className="flex flex-col gap-y-2">
              <Label className="text-violet-500">Upload file sản phẩm</Label>
              <UploadDropzone endpoint="productFileUploader" />
            </div>
          </CardContent>
        </form>
      </Card>
    </section>
  );
}
