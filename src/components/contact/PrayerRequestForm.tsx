import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required").optional().or(z.literal("")),
  request: z.string().min(10, "Please share your prayer request"),
});

type FormValues = z.infer<typeof schema>;

export function PrayerRequestForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (_data: FormValues) => {
    // TODO: Wire to Web3Forms or Formspree
    toast.success("Your prayer request has been submitted. We're praying with you.");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Label htmlFor="prayer-name">Your Name</Label>
        <Input id="prayer-name" {...register("name")} className="mt-1.5" />
        {errors.name && (
          <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="prayer-email">Email (optional)</Label>
        <Input
          id="prayer-email"
          type="email"
          {...register("email")}
          className="mt-1.5"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="prayer-request">Prayer Request</Label>
        <Textarea
          id="prayer-request"
          rows={6}
          placeholder="Share your prayer request here..."
          {...register("request")}
          className="mt-1.5"
        />
        {errors.request && (
          <p className="mt-1 text-sm text-destructive">{errors.request.message}</p>
        )}
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full bg-gold text-white hover:bg-gold-light">
        Submit Prayer Request
      </Button>
    </form>
  );
}
